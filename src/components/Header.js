import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header({user, signOut}) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon/>
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo? user.photo : "data:image/jpeg;base64,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"} alt=""/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background:linear-gradient(45deg, #350d36, #ef5350);
    color: white;
    display:flex;
    align-items: center;
    justify-content: center; 
    position: relative;
    // spread the item as far as possible from each other^


`

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
`

const SearchContainer = styled.div`
    min-width:400px;
    margin-left: 16px;
    margin-right: 16px;
    // margin is outside the element, padding is inside the element
`

const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(188, 171, 188);
    border-radius: 6px;
    display: flex;
    align-items:center;

    input{
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top:4px;
        padding-bottom:4px;
        ::placeholder { 
            color: rgb(188, 171, 188);
            opacity: 0.8;
        }
        
    }

    input:focus{
        outline:none;
    }
`

const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right: 16px;
    position: absolute;
    //this takes this element out of context of the Container, so it will always stick to the right hand side 
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height:28px;
    border: 2px solid white;
    border-radius : 3px;
    cursor: pointer;
    img{
        width:100%;
        height: 100%;
    }
`
