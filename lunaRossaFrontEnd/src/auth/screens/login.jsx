import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { useState } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { AuthLayout } from "../layouts/authLayout"
import { login } from "../../services/login" 


export const Login = () => {
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const usuario = login(mail, pass)
        setMail('')
        setPass('')
        if(usuario.validation){
            setUser(usuario)
            window.localStorage.setItem(
                'userAppLog', JSON.stringify(usuario)
            )
            navigate('/main')
        }
    }

    return (

        <AuthLayout title='Login'>
            <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField label="email"
                            type="email"
                            placeholder="email@example.com" 
                            fullWidth
                            value={mail}
                            onChange={({target}) => setMail(target.value)}/>
                        </Grid>
                        
                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField label="password"
                            type="password"
                            placeholder="Your password here" 
                            fullWidth
                            value={pass}
                            onChange={({target}) => setPass(target.value)}/>
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
                            <Grid item xs={ 12 }>
                                <Button variant="contained" fullWidth onClick={handleSubmit}>
                                    Login 
                                </Button>
                            </Grid>


                        </Grid>

                        <Grid container direction='row' justifyContent='end' mr={3} >
                            <Link component={ RouterLink } color="inherit" to="/register">
                                Create a New Account
                            </Link>
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
    )

}