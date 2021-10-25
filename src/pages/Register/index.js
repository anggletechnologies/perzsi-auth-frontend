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
import { Link } from 'react-router-dom'


const initialValues = {
  username:'',
  email:'',
  password:'',
  re_password:''
}

const validationSchema = Yup.object({
  username:Yup.string().min(3,"minimum of 5 character is required").max(20,"username cannot be more than 20 character").required(),
  email:Yup.string().email().required(),
  password:Yup.string().min(8,"password must be atleast 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/," password must have a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number"),
  re_password:Yup.string()
  .oneOf([Yup.ref('password'),null], 'Passwords must match').required("confirm password is required")
})


export default function Register() {
    const {enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const api = useSdk()
    const {next} = useQuery()
    const formik = useFormik({
      validationSchema,
      initialValues,
      onSubmit:(values,actions)=>{
        
        api.Auth.register({
          data:values,
          params:{next}
        })
        .then(({data})=>{
          enqueueSnackbar(`A confirmation link has been sent to ${values.email} follow the link to activate your accoount`,{variant:"success"})
          setTimeout(() => {
            navigate(genLink.emailSentConfirm({email:values.email,...(next?{next}:{})}),{replace:true})
          }, 3000);
        })
        .catch(error=>{
          console.error(error)
          error?.response?.data?.detail&&enqueueSnackbar(error.response.data.detail,{variant:"error"})
        })
        .finally(()=>{
          actions.setSubmitting(false)
          actions.resetForm()
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
              Create account
            </Typography>
          </Box>
          <Box my={2} >
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Username
              </Typography>
            </Box>
            <TextField {...getFieldProps("username")} fullWidth  className="shadow-md" id="username" placeholder="Username"  />
            <FormikErrorDisplay formik={formik} name="username" />
          </Box>
          <Box my={2}> 
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Email
              </Typography>
            </Box>
            <TextField type="email" {...getFieldProps("email")} fullWidth className="shadow-md" id="email" placeholder="Email"  />
            <FormikErrorDisplay formik={formik} name="email" />
          </Box>
          <Box my={2}>
            <Box mb={1}>
              <Typography variant="subtitle1" >
                Password
              </Typography>
            </Box>
            <TextField type="password" {...getFieldProps("password")} fullWidth className="shadow-md" id="password" placeholder="Password"  />
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
              Signup
            </LoadingButton>
          </Box>
          <Box mt={{xs:3,md:5}}>
            <Link to={genLink.login(next?{next}:{})}>
              Already have an account? Login.
            </Link>
          </Box>
        </Box>
    )
}
