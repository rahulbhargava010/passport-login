import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddExpense(props)  {
        const classes = useStyles();

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Your Daily Expense
                </Typography>
                <form className={classes.form} noValidate onSubmit = { props.hanldeExpenseSubmit } >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="actualLeads"
                            name="actualLeads"
                            variant="outlined"
                            required
                            fullWidth
                            id="actualLeads"
                            label="Actual Leads"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="plannedLeads"
                            label="Planned Leads"
                            name="plannedLeads"
                            autoComplete="plannedLeads"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="totalBudget"
                            label="Total Budget"
                            id="totalBudget"
                            autoComplete="totalBudget"
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="cpl"
                            label="CPL"
                            id="cpl"
                            autoComplete="cpl"
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="clicks"
                            label="Clicks"
                            id="clicks"
                            autoComplete="clicks"
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="impressions"
                            label="Impressions"
                            id="impressions"
                            autoComplete="impressions"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="spendingDate"
                            label="Spending Date"
                            id="outlined-spendingDate"
                            type="date"
                            autoComplete="spendingDate"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="campaignStartDate"
                            id="outlined-campaignStartDate"
                            label="Campaign Start Date"
                            type="date"
                            autoComplete="campaignStartDate"
                        />
                        </Grid>
                        
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add
                    </Button>
                    <Grid container justify="flex-end">
                  </Grid>    
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            </Container>
        );
}

// export default Login