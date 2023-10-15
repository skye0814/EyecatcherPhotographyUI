import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserRequest } from '../models/UserRequest';
import { post } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}


/**
 * This template uses [`Inter`](https://fonts.google.com/specimen/Inter?query=inter) font.
 */
export default function LoginPage() {

  const handleLogin = (data: UserRequest) => {
      post('/api/user/login', data)
      .then((response) => {
          localStorage.setItem('ep-token', response.token);
          window.location.href = '/';
      })
      .catch((err) => {
          if (err.response === undefined) {
            toast("Cannot connect to the server");
          }
          else {
            toast(err.response.data);
          }
      })
  }

  useEffect(()=>{
      // Change title
      document.title = document.title + " - Login";
      document.getElementById("navbar")!.style.visibility = 'hidden';
  }, []);

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '40vw', // must be `vw` only
            '--Form-maxWidth': '700px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255 255 255 / 0.6)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:
              'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontWeight="lg"
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundImage: `url("/images/logoblack.png")`,
                    backgroundSize: "120%",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              }
            >
              Eyecatcher <br/> Photography
            </Typography>
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}
          >
            <div>
              <Typography component="h1" fontSize="xl2" fontWeight="lg">
                Sign in to your account
              </Typography>
              <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
                Welcome back
              </Typography>
            </div>
            <form
              onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                const data = {
                  username: formElements.username.value,
                  password: formElements.password.value
                };
                handleLogin(data);
              }}
            >
              <FormControl required>
                <FormLabel>Username</FormLabel>
                <Input type="username" name="username" />
              </FormControl>
              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Checkbox size="sm" label="Remember for 30 days" name="persistent" />
                <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
                  Forgot your password?
                </Link>
              </Box>
              <Button type="submit" fullWidth>
                Sign in
              </Button>
            </form>
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<FontAwesomeIcon icon={faGoogle} />}
            >
              Sign in with Google
            </Button>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Eyecatcher Photography {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(/images/loginbackground.jpg)'
        })}
      />
      <ToastContainer 
        autoClose={5000}
        closeOnClick
        limit={1}
      />
    </CssVarsProvider>
  );
}
