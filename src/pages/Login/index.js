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
import { Link } from 'react-router-dom'
import genLink from '../../utils/genLink'

const initialValues = {
  email:'',
  password:''
}

const validationSchema = Yup.object({
  email:Yup.string().email().required(),
  password:Yup.string().min(8,"password must be atleast 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/," password must have a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number"),
 
})


export default function Login() {
    const {enqueueSnackbar,closeSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const api = useSdk()
    const {next} = useQuery()
    const formik = useFormik({
      validationSchema,
      initialValues,
      onSubmit:(values,actions)=>{
        console.log("values values on submit",values)
        api.Auth.login({
          data:values
        })
        .then(({data})=>{
          const key = enqueueSnackbar("Login was successful",{variant:"success"})
          setTimeout(() => {
            closeSnackbar(key)
            next&&navigate(next,{replace:true})
          }, 2000);
        })
        .catch(error=>{
          console.error(error)
          error?.response?.data?.detail&&enqueueSnackbar(error.response.data.detail,{variant:"error"})
        })
        .finally(()=>{
          actions.setSubmitting(false)
        })
      }
    })

    const {getFieldProps,isSubmitting,submitForm} = formik
    
    return (
        <Box pb={{xs:0,md:10}} className=" md:w-2/6 w-full xs:mx-10" >
          <Box display="flex" justifyContent="center">
            <Typography variant="h2">
              Login
            </Typography>
          </Box>
          <Box mb={3}> 
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Email
              </Typography>
            </Box>
            <TextField type="email" {...getFieldProps("email")} fullWidth className="shadow-md" id="email" placeholder="Email"  />
            <FormikErrorDisplay formik={formik} name="email" />
          </Box>
          <Box my={3}>
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Password
              </Typography>
            </Box>
            <TextField type="password" {...getFieldProps("password")} fullWidth className="shadow-md" id="password" placeholder="Enter your passwordPassword"  />
            <FormikErrorDisplay formik={formik} name="password" />
          </Box>
          
          <Box>
            <LoadingButton onClick={submitForm} disabled={isSubmitting}  fullWidth variant="contained" color="primary" loading={isSubmitting} >
              Login
            </LoadingButton>
          </Box>
          <Box mt={{xs:1,md:3}} display="flex" justifyContent="space-between">
            <Link  to={genLink.resetPassword(next?{next}:{})}>
              Forget Password?
            </Link>
            <Link  to={genLink.register(next?{next}:{})}>
              Create account
            </Link>
          </Box>
        </Box>
    )
}
