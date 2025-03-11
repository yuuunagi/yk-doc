import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/doc/',
  publicPath: '/doc/',
  themeConfig: {
    name: 'DOC',
    logo: '/doc/doc-logo.png',
    footer: false,
  },
  styles: [
    `
	img.markdown-img-shadow{
		padding:5px;
		box-shadow: 5px 5px 5px darkgray;
	}
    img.markdown-img-shadow-width{
        width: 90%;
        padding:5px;
    	box-shadow: 5px 5px 5px darkgray;
    }
    img.markdown-img-shadow-width-middle{
        width: 62%;
        padding:5px;
    	box-shadow: 5px 5px 5px darkgray;
    }
    img.markdown-img-shadow-width-small{
        width: 35%;
        padding:5px;
    	box-shadow: 5px 5px 5px darkgray;
    }
    .svg{
      width:20px;
      height:20px;	
    }
  `,
  ],
});
