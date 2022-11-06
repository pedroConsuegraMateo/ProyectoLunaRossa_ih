import { Grid, Button, TextField, Link, Typography } from "@mui/material";
import { AuthLayout } from "../layouts/authLayout";
import { Link as RouterLink } from "react-router-dom";

export const Register = () => {
  return (
    <AuthLayout title="Let's Create a New Account">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Your email"
              type="email"
              placeholder="email@example.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Your password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Confirm your password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container justifyContent="space-between">
            <Grid item sx={{ mt: 2 }}>
              <TextField
                xs={12}
                label="Your First Name"
                type="text"
                placeholder="First Name"
                fullWidth
              />
            </Grid>

            <Grid item sx={{ mt: 2 }}>
              <TextField
                xs={12}
                label="Your Last Name"
                type="text"
                placeholder="Last Name"
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between">
            <Grid item sx={{ mt: 2 }}>
              <TextField
                xs={12}
                label="Your Phone Number"
                type="text"
                placeholder="Phone Number"
                fullWidth
              />
            </Grid>

            <Grid item sx={{ mt: 2 }}>
              <TextField xs={12} type="date" placeholder="Birthday" fullWidth />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Send
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" mr={3}>
            <Typography mr={1}>Do you already have an account? </Typography>
            <Link component={RouterLink} color="inherit" to="/login">
              <Typography>Sign in</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
