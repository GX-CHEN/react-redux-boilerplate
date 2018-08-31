import { generateTitleFromGiphySlug } from '../../src/model/utils';

describe('generateTitleFromGiphySlug should generate title from slug data from giphy API response', () => {
  it('simple case test', async () => {
    expect(generateTitleFromGiphySlug('test-gw3IWyGkC0rsazTi')).toEqual('test');
  });

  it('complicated case test', async () => {
    expect(generateTitleFromGiphySlug('pink-perfect-pnk-l3fzM2wgd6TygHbYA')).toEqual('pink perfect pnk');
  });
});
