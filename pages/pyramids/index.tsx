import React, { useState, useEffect } from 'react'
import { VStack, Heading, UnorderedList, Box, Container, Input } from '@chakra-ui/react'

import { debounce } from '../../utils'
import { getPyramids } from '../../queries/apis'
import PyramidItem from '../../components/PyramidCard'

const Pyramids = ({ pyramids }) => {
  const [items, setItems] = useState(pyramids.data)
  const [pg, setPage] = useState(pyramids.page)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const loadMorePyramids = async () => {
    setIsLoading(true)
    const { data, page, hasMore } = await getPyramids(pg + 1, 5, '')

    setPage(page)
    setItems([...items, ...data])
    setIsLoading(false)
    setHasMore(hasMore)
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 20 &&
      !isLoading &&
      hasMore
    ) {
      loadMorePyramids()
    }
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const onSearch = async () => {
    setIsLoading(true)
    const { data, page, hasMore } = await getPyramids(1, 5, searchTerm)

    setPage(page)
    setItems(data)
    setHasMore(hasMore)
    setIsLoading(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, isLoading, hasMore])

  useEffect(debounce(onSearch, 1000), [searchTerm])

  return (
    <VStack
      spacing={8}
      align="start"
      py={12}
      minHeight={'100vh'}
      bg="gray.50"
    >
      <Container maxW="container.lg">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          my={8}
        >
          List of Pyramids
        </Heading>
        <Input
          type="text"
          placeholder="Search by pyramid name"
          value={searchTerm}
          onChange={handleSearchChange}
          mb={2}
        />
        <UnorderedList
          styleType="none"
          m={0}
        >
          {items.map((pyramid, index) => (
            <PyramidItem
              key={index}
              item={pyramid}
            />
          ))}
          {isLoading && (
            <Box
              py={4}
              textAlign="center"
            >
              Loading...
            </Box>
          )}
        </UnorderedList>
      </Container>
    </VStack>
  )
}

export default Pyramids

export async function getStaticProps() {
  const res = await getPyramids(1, 5, '')

  return {
    props: {
      pyramids: res,
    },
  }
}
