import Icon from '@chakra-ui/react'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'

export default function Social() {
    return (
        <HStack spacing="24">
            <FaFacebookF/>
            <FaGoogle/>
            <FaSpotify/>
            <FaShopify/>
        </HStack>
    )
}