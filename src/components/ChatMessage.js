import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://media.npr.org/assets/img/2020/12/24/geminagarlandlewis_birdinglaisla-02_custom-13b6f31b7556357b7317ff22b1c9072d8a701e86-s800-c85.jpg" alt=""/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Phoenix Liu
                    <span>3/5/2021 1:19 PM</span>
                </Name>
                <Text>
                    Ayyyyy
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    //vertical and horizontal padding
    display: flex;
    align-items: center;

    :hover{
        background: #fafafa;
    }

`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 10px;


    img {
        width: 100%;
        height: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 1.4;
    

    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97, 96,97);
        font-size: 13px;
    }
`

const Text = styled.span``