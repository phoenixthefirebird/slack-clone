import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login({setUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            setUser(newUser);
            localStorage.setItem('user',JSON.stringify(newUser));
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
                <h1>Sign in to Slack</h1>
                <SignInbutton onClick={() => signIn()}>
                    Sign In With Google
                </SignInbutton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    //vertical height
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb( 0 0 0 /24%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SlackImg = styled.img`
    margin-bottom: 10px;
    height: 100px;
`

const SignInbutton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`