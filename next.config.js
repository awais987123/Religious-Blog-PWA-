/** @type {import('next').NextConfig} */
const withpwa= require('next-pwa');

module.exports =withpwa( {
  pwa:{
    dest: 'public',
    disable: process.env.NODE_ENV==='development',
  },
  reactStrictMode: true,
})
