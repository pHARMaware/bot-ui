import type { Guild } from '@redose/types';
import React, { useState, useEffect, FC } from 'react';
import { Container, Typography } from '@mui/material';
import axios, { AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';
import redoseClient from '../../redose-client';
import PageLoading from '../../components/page-loading';

const GuildPage: FC = function GuildPage() {
  const [guild, setGuild] = useState<Guild | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    redoseClient.get<Guild>('/guild', {
      signal: ctrl.signal,
    })
      .then((res) => setGuild({
        ...res.data,
        createdAt: new Date(res.data.createdAt),
        owner: res.data.owner && {
          ...res.data.owner,
          joinedAt: res.data.owner.joinedAt && new Date(res.data.owner.joinedAt),
        },
        roles: res.data.roles.map((role) => ({
          ...role,
          createdAt: new Date(role.createdAt),
        })),
      }))
      .catch((ex: AxiosError) => {
        if (!axios.isCancel(ex)) {
          console.error(ex);
          enqueueSnackbar('Error fetching guild.', { variant: 'error' });
        }
      });

    return () => {
      ctrl.abort();
    };
  }, []);

  return (
    <>
      <PageLoading isOpen={!guild} />
      {!!guild && (
        <Container>
          <Typography variant="h2">{guild.name}</Typography>
          <Typography variant="body1">{guild.description}</Typography>
          <Typography variant="body2">Members: {guild.memberCount}</Typography>
        </Container>
      )}
    </>
  );
};

export default GuildPage;
