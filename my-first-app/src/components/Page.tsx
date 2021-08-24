import React, { useEffect } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@contentful/forma-36-react-components';
import { PageExtensionSDK } from '@contentful/app-sdk';

interface PageProps {
  sdk: PageExtensionSDK;
}

const Page = (props: PageProps) => {
  useEffect(() => {
    props.sdk.space.getEntries().then((data) => {
      console.log('data: ', data.items);
    })
  }, []);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Organization role</TableCell>
          <TableCell>Last activity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Claus Mitchell</TableCell>
          <TableCell>claus.mitchell@contentful.com</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>August 29, 2018</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Johannes Ramos</TableCell>
          <TableCell>johannes.ramos@contentful.com</TableCell>
          <TableCell>CTO</TableCell>
          <TableCell>July 27, 2019</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Alex Kalinoski</TableCell>
          <TableCell>alex.kalinoski@contentful.com</TableCell>
          <TableCell>CDO</TableCell>
          <TableCell>June 13, 2019</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Page;
