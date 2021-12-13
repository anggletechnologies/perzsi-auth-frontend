import React from 'react'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import FormikErrorDisplay from '../../components/display/FormikErrorDisplay'
import * as Yup from 'yup'
import useSdk from '../../apiClient'
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router'
import useQuery from '../../hooks/useQuery'
import { Link } from 'react-router-dom'
import genLink from '../../utils/genLink'

const initialValues = {
  email:'',
}

const validationSchema = Yup.object({
  email:Yup.string().email().required()
})


export default function RestPassword() {
    const {enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const api = useSdk()
    const {next} = useQuery()

    const formik = useFormik({
      validationSchema,
      initialValues,
      onSubmit:(values,actions)=>{
        
        api.Auth.resetPassword({
          data:values,
          params:{next}
        })
        .then(({data})=>{
          enqueueSnackbar(`An link has been sent to ${values.email}, follow the link to reset your password`,{variant:"success"})
          
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

    React.useEffect(()=>{
      window.document.title = "Reset password"
    },[])

    const {getFieldProps,isSubmitting,submitForm} = formik
    // console.log("values",values)
    // console.log("errors",errors)
    return (
        <Box className=" md:w-2/6 w-full xs:mx-10" >
          <Box display="flex" justifyContent="center">
            <Typography variant="h2">
              Reset password
            </Typography>
          </Box>
          <Box my={{xs:3,md:5}}> 
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Email
              </Typography>
            </Box>
            <TextField type="email" {...getFieldProps("email")} fullWidth className="shadow-md" id="email" placeholder="Email"  />
            <FormikErrorDisplay formik={formik} name="email" />
          </Box>
          <Box>
            <LoadingButton onClick={submitForm} disabled={isSubmitting}  fullWidth variant="contained" color="primary" loading={isSubmitting} >
              Reset Password
            </LoadingButton>
          </Box>
          <Box my={3} display="flex" justifyContent="space-between">
            <Link to={genLink.login(next?{next}:{})}>
                Login
            </Link>
            <Link to={genLink.register(next?{next}:{})}>
                Create Account
            </Link>
          </Box>
        </Box>
    )
}
