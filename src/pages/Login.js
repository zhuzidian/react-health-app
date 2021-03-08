import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Container, TextField, Avatar, Typography, InputAdornment, IconButton } from '@material-ui/core'
import {
  makeStyles
} from '@material-ui/core/styles'

import {
  LockOutlined as LockOutlinedIcon,
  Visibility,
  VisibilityOff
} from '@material-ui/icons'

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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()
    if (username === 'a' && password === 'a') {
      history.push('/input')
    }
  }

  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={login}>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="ログインID"
            required
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="パスワード"
            type={showPassword ? 'text' : 'password'}
            required
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            className={classes.submit}
          >
            ログイン
          </Button>
        </form>
      </div>
    </Container>
  )
}
