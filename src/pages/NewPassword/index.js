import React from 'react'
import { InputLabel, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import FormikErrorDisplay from '../../components/display/FormikErrorDisplay'
import * as Yup from 'yup'
import useSdk from '../../apiClient'
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router'
import genlink from '../../utils/genLink'
import useQuery from '../../hooks/useQuery'
import genLink from '../../utils/genLink'


const initialValues = {
  password:'',
  re_password:''
}

const validationSchema = Yup.object({
  password:Yup.string().min(8,"password must be atleast 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/," password must have a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number"),
  re_password:Yup.string()
  .oneOf([Yup.ref('password'),null], 'Passwords must match').required("confirm password is required")
})


export default function NewPassword() {
    const {token,next} = useQuery()
    const {enqueueSnackbar,closeSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const api = useSdk()
    const formik = useFormik({
      validationSchema,
      initialValues,
      onSubmit:(values,actions)=>{
        
        api.Auth.newPassword({
          data:{
            token,
            password:values.password
          }
        })
        .then(({data})=>{
          const key = enqueueSnackbar("Your Password has been change successful",{variant:"success"})
          setTimeout(() => {
            closeSnackbar(key)
            navigate(next||genLink.login(),{replace:true})
          }, 3000);
        })
        .catch(error=>{
          console.error(error)
          error?.response?.data?.detail&&enqueueSnackbar(error.response.data.detail,{variant:"error"})
        })
        .finally(()=>{
          actions.resetForm()
          actions.setSubmitting(false)
        })
      }
    })

    const {getFieldProps,isSubmitting,submitForm} = formik
    // console.log("values",values)
    // console.log("errors",errors)
    return (
        <Box className=" md:w-2/6 w-full xs:mx-10" >
          <Box display="flex" justifyContent="center">
            <Typography variant="h2">
              Create new password
            </Typography>
          </Box>
          <Box my={2}>
            <Box mb={1}>
              <Typography variant="subtitle1" >
                New Password
              </Typography>
            </Box>
            <TextField type="password" {...getFieldProps("password")} fullWidth className="shadow-md" id="password" placeholder="New Password"  />
            <FormikErrorDisplay formik={formik} name="password" />
          </Box>
          <Box my={2}>
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Confirm Passowrd
              </Typography>
            </Box>
            <TextField type="password" fullWidth {...getFieldProps("re_password")} className="shadow-md" id="re_password" placeholder="Confirm Password"  />
            <FormikErrorDisplay name="re_password" formik={formik} />
          </Box>
          <Box>
            <LoadingButton onClick={submitForm} disabled={isSubmitting}  fullWidth variant="contained" color="primary" loading={isSubmitting} >
              Save Password
            </LoadingButton>
          </Box>
        </Box>
    )
}
