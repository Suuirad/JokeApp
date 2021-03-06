import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useFetch } from "../../../hooks/UseFetch";

const unfoldAnimation = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const GifExpand = styled.details`
    background-color: ${props => props.theme.accent1};
    color: ${props => props.theme.titleFont};
    
    font-size: 1rem;
    cursor: pointer;

    overflow: hidden;
    position: relative;
    z-index: 1; 

    &[open] {
        div {
            animation: ${unfoldAnimation} 1.5s;
        }
    }

    summary {
        background-color: ${props => props.theme.accent1};

        padding: 2rem;
        position: relative;
        z-index: 2; 

        :hover {
            background-color: ${props => props.theme.accent1Hover};
        }
        :focus {
            outline: none;
        }
    }

    @media all and (min-width: 800px) {
        font-size: 2rem;
    }
`;

const GifWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Gif = styled.img`
    display: inline-block;
    width: 50%;
    border: 1px solid black;

    @media all and (min-width: 800px) {
        width: 25%;
    }
`;

export type GifGridProps = {
    jokeId: string
}

export const GifGrid: React.FC<GifGridProps> = (args) => {
    const { theme } = useContext(ThemeContext);

    const { data } = useFetch("/api/v1/joke/" + args.jokeId + "/gif");

    if(data === null){
        return <div style={{padding: "2rem"}}>Gifs api got to many requests, trink tea and refresh...</div>
    }

    return (
        <GifExpand theme={theme}>
            <summary>Related Gifs</summary>
            <GifWrapper>{
                data.map((gif: {keyword: string, gif: string}) => {
                    return <Gif src={gif.gif} />
                })
            }</GifWrapper>
        </GifExpand>
    );
}