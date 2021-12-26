# digitalcards

Share digital cards with family, friends and everybody else.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LukaHarambasic/digitalcards) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLukaHarambasic%2Fdigitalcards)

## How to use digitalcards

### Get the code

- Fork / Clone this repository _OR_ directly deploy it to Netlify or Vercel with the buttons above (which will also clone the repository)

### Working locally

- Install all dependencies `npm install`
- Start local development server `npm run dev`

### Generate new cards

> The generated cards and categories can be found in `/content`

- Create new cards with `npm run generateCard` / `npm run gc` or manually by adding new `.md` files to the corresponding categories
- For the first time you will be asked how your first category should be called, e.g. `2021-christmas`
- You also can create new categories directly from the command line, choose option __1__.
- For each new card you generate you will be asked which category it belongs to

### Deploying

- If you used one of the buttons you are done - everything you publish on `main` will be published
- You also can manually connect your repository to Neltify/Vercel or similar services
- If you are here you will know what you ahve to do :D

## Next steps

- [ ] Add theming (open for suggestions)
- [ ] Easy way of link sharing (UUIDs are way too long, but I also don't want to provide an overview as than everybody easily could find all other cards)

## Credits

- Christmas decoration: https://www.craftingspree.com/free-cricut-christmas-svgs-1
- Snowflakes from: https://codepen.io/alvaromontoro/pen/GRNmdzB?editors=1100
- Fonts: https://fonts.google.com/
