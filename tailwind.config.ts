import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        'white': 'rgb(255, 255, 255)', // --token-c63500d0-3392-49ff-b400-617c8d04a492
        'black': 'rgb(0, 0, 0)', // --token-4dc32b24-0c70-429a-aa92-661076b4c65c
        'light-blue': 'rgb(229, 235, 255)', // --token-f9309884-f46f-42e8-b972-778e14c80307
        'soft-blue': 'rgb(239, 243, 255)', // --token-8df05a3e-88ed-41cb-8776-b8209a1b500f
        'pale-blue': 'rgb(249, 250, 255)', // --token-09fd3276-5473-4ba2-87f9-0de92c6bae4e
        'dark': 'rgb(0, 2, 15)', // --token-6cf39457-d957-4967-8059-39c512f3137e
        'night': '#0e122e', // --token-e5e32cd2-9193-48bc-af06-07aa6da4bbe5
        'dark-blue':'#232d6b',
        'dark-blue-2':'#131839',
        'blue-light':'#080b1c',

        // Text Colors
        'text-blue': 'rgb(0, 59, 255)', // --token-71923aac-b113-4f32-835c-69806fb13e54
        'deep-blue': 'rgb(25, 78, 255)', // --token-cef4d70e-0eaa-45ea-8c1c-858682b3fde2
        'text-mid-blue': 'rgb(51, 98, 255)', // --token-f1a1ff14-8606-46dd-b2d5-8d68b8e62368
        'text-light-blue': 'rgb(102, 137, 255)', // --token-45325dc9-b834-4dc2-8214-338b736e1601
        'text-gray': 'rgb(87, 95, 117)', // --token-6f86c4c9-9027-40f4-85a0-9f9832d22a8a
        'text-light-gray': 'rgb(109, 119, 146)', // --token-8b751802-c4ad-424d-ba87-061787dcedbf

        // Utility Colors
        'utility-dark-blue': 'rgb(0, 3, 25)', // --token-19b7c8b2-a15b-4292-8bd5-afd6da15510b
        'utility-deeper-blue': 'rgb(0, 4, 31)', // --token-0c2a37bd-a518-4be7-ad0d-0de6e24f8c72
        'utility-deepest-blue': 'rgb(0, 5, 41)', // --token-f4b26379-d03c-4ef3-a642-d95a8cac7d1c
        'utility-shadow': 'rgb(10, 12, 30)', // --token-f40c3d7d-74c3-4e52-9cd9-1acb262c1c61

        // Neutral Shades
        'neutral-lightest': 'rgb(252, 252, 253)', // --token-d729984f-7ecd-4653-ac7d-4a3f264d57db
        'neutral-lighter': 'rgb(246, 247, 249)', // --token-0551846e-fcb1-4601-a452-28ddc149f19b
        'neutral-light': 'rgb(240, 241, 244)', // --token-73bf1c19-b295-4a80-8fec-e4a1490718db
        'neutral-medium': 'rgb(196, 200, 212)', // --token-1b8625e0-13ce-4d73-8156-ae8786fbff1f
        'neutral-dark': 'rgb(167, 173, 190)', // --token-5290a3f4-c858-4df7-b4b0-ea87535a1ae5
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
