import { XMLParser } from "fast-xml-parser";
import { RSS_FEED_URL } from '../constants/config';

export const fetchRSSFeed = async () => {
  const response = await fetch(RSS_FEED_URL);
  const text = await response.text();
  const parser = new XMLParser();
  const result = parser.parse(text);
  return result.rss.channel.item;
};
