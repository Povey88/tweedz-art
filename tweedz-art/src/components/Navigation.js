import React from 'react';
import {
    Box,
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';

  import logo from '../../src/art-logo.jpg';

  import { ChevronRightIcon } from '@chakra-ui/icons'



const Navigation = () => {
  return (
<Box d='relative'  m={4}>
    <Breadcrumb float='right' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}> 
        
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Art</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>About</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Print Store</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
</Box>
  )
}

export default Navigation;