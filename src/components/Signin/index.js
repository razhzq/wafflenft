import { FormLabel,
         Form,
         FormH1,
         FormInput,
         Text,
         Container,
         FormWrap,
         Icon,
         FormContent,
         FormButton

} from "./SigninElements";


import ReactImage from 'react-image-wrapper';
import Logo from '../../images/logopasar.png';




const SignIn = () => {
    return ( 
        <>
           <Container>
               <FormWrap>
                   <Icon to="/">
                      <ReactImage
                         src={Logo}
                         width={40}
                         height={60}
                      />
                   </Icon>
                   <FormContent>
                       <Form action='#'>
                           <FormH1>Sign in to your account</FormH1>
                           <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>

                       </Form>
                   </FormContent>
               </FormWrap>
           </Container>
        </>
     );
}
 
export default SignIn;