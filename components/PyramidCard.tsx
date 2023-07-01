import Image from 'next/image'
import { Flex, ListItem, Box } from '@chakra-ui/react'
import { Pyramid } from '../queries/apis'

const PyramidItem = ({ item }: { item: Pyramid }) => {
  return (
    <ListItem
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      p={6}
      _hover={{ boxShadow: 'xl' }}
      transition="box-shadow 0.2s ease"
      my={4}
    >
      <Flex>
        <Image
          style={{ borderRadius: '10px', marginRight: '20px' }}
          src={item.photo}
          alt={item.name}
          width={200}
          height={200}
        />
        <Box width={'100%'}>
          <Flex justifyContent={'space-between'}>
            <Box
              fontWeight="bold"
              fontSize={'2xl'}
            >
              {item.name}
            </Box>
            <Box>{item.location}</Box>
          </Flex>
          <Box>
            <Box>Dynasty: {item.dynasty}</Box>
            <Box>Pharaoh: {item.pharaoh}</Box>
          </Box>
        </Box>
      </Flex>
    </ListItem>
  )
}

export default PyramidItem
