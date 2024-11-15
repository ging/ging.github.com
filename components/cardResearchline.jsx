import React from 'react';
import { useEffect, useState } from "react";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutwardRounded';
import ResearchlineIllust from './illustrations/ResearchlineIllust';
import Link from 'react';

const CardResearchline = () => {

    return (
<>
   
            <div
      className={`card-researchline`}
    >
              <ResearchlineIllust />
           
              
            
            <Heading level="h4" className="pt-4"> Researchline 1 </Heading>
            <Text>
              Lorem Ipsum duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </Text>
          </div>
       </>
    );
}

export default CardResearchline;
