import { Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CommonContainerProps {
  children: ReactNode;
}

const CommonContainer: React.FC<CommonContainerProps> = ({ children, ...rest }) => {
    return (
      <Container maxW={{base:"90vw","2xl":"80vw"}} mx="auto" p={4} {...rest} px={{base:0,md:10}}>
        {children}
      </Container>
    );
  };
  
  export default CommonContainer;