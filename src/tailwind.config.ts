import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        PiBullet:"#115DCE",
        PiGradentto:'#FE4501',
        PiFooter:'#E4F2EE',
        PiCards:'#FDF5F2',
        PiGrey:'#545454',
        PiWhiteBackground:'#FFF',
        PiBlack:'#1D1B19',
        PiGreyBackground:'#F9F9F9'
      },
      fontFamily: {
        guruWayThin: ["Guruway-Thin"],
        guruWayLight: ["Guruway-Light"],
        guruWayBold: ["Guruway-Bold"],
        guruWaySemiBold: ["Guruway-SemiBold"],
        guruWayMedium: ["Guruway-Medium"],
        guruWayRegular: ["Guruway-Regular"],
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
