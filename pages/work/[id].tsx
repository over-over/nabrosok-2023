import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { TArtistDetails, TWorkDetails } from '@shared/lib';
import { WorkPage } from '@pagination/work';

import works from '../../scripts/spreadsheet/data/works.json';
import artists from '../../scripts/spreadsheet/data/artists.json';
import lots from '../../scripts/spreadsheet/data/telegram-lots.json';

type Props = {
  workData: TWorkDetails;
  artistData: TArtistDetails;
  auctionLink?: string;
};

const Work = ({ workData, artistData, auctionLink }: Props) => {
  return (
    <>
      <Head>
        <title>{workData.name}</title>
      </Head>
      <WorkPage
        artistData={artistData}
        workData={workData}
        auctionLink={auctionLink}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const workData = works[id as keyof typeof works];
  const artistData = artists[workData.artistId as keyof typeof artists];

  let auctionLink: string | undefined;
  const telegramWorkData = lots[id as keyof typeof lots];

  if (telegramWorkData) {
    const data = JSON.parse(telegramWorkData);
    const messageId = data.result.message_id;
    auctionLink = `https://t.me/nabrosok_auction_2023/${messageId}`;
  }

  return {
    props: {
      workData,
      artistData,
      ...(auctionLink ? { auctionLink } : {}),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(works).map(key => ({ params: { id: key } }));
  return {
    paths,
    fallback: false,
  };
};

export default Work;
