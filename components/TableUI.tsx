import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react';

const TableUI: React.FC = () => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Departure</Th>
            <Th>Arrival</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Sunday 20-Aug-2023</Td>
            <Td>Peace River</Td>
            <Td>Edmonton International</Td>
          </Tr>
          <Tr>
            <Td>Saturday 19-Aug-2023</Td>
            <Td>Grande Prairie</Td>
            <Td>Peace River</Td>
          </Tr>
          <Tr>
            <Td>Saturday 19-Aug-2023</Td>
            <Td>Edmonton International</Td>
            <Td>Grande Praire</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Operator: CanWestAir</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default TableUI;