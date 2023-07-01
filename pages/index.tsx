import Link from 'next/link'
import { VStack, Heading, Link as ChakraLink, Container, Box } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <VStack>
      <Container
        height={'100vh'}
        maxW="container.full"
        m={0}
        p={0}
        display={'flex'}
        flexDir={'column'}
      >
        <Box
          py={24}
          bg="pink.600"
          color="white"
        >
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            my={8}
          >
            Welcome to my Pyramids List!
          </Heading>
        </Box>
        <Box
          flex={1}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Link href="/pyramids">
            <ChakraLink
              color={'white'}
              fontSize="lg"
              fontWeight="bold"
              p={4}
              borderRadius="md"
              bg="pink.500"
              _hover={{ bg: 'pink.400' }}
            >
              View Pyramids
            </ChakraLink>
          </Link>
        </Box>
      </Container>
    </VStack>
  )
}

export default HomePage
