import { minify } from 'terser';

export const compressCode = async (code: string): Promise<string> => {
  const output = await minify(code, {
    toplevel: true,
    sourceMap: false,
    compress: {
      passes: 3,
    },
  });
  return output.code!;
};
