import { applyLoadingOverrides } from '../lib/use-translation-overrides';
import { REVIEWS } from '../lib/reviews-data';
import * as fs from 'fs';

const ov = JSON.parse(fs.readFileSync('./translations-data/current/en.json', 'utf8'));

const loadingMock = { header_label: '', title: '' };
const result = applyLoadingOverrides(loadingMock, REVIEWS.en, ov);

console.log(JSON.stringify(result.reviews, null, 2));
