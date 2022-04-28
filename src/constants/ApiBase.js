import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');

export const ApiBase = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/rappi4A',
  headers: {
    auth: token,
  }
});