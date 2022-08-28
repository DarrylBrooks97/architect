export interface RootObject {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions | null;
  user: User;
  exif: Exif;
  location: Location;
  views: number;
  downloads: number;
}

export interface Location {
  title: string;
  name: string;
  city: string;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture?: any;
  focal_length?: any;
  iso: number;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: any;
  twitter_username?: any;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username?: any;
  paypal_email?: any;
}

export interface Profileimage {
  small: string;
  medium: string;
  large: string;
}

export interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface Topicsubmissions {
  architecture: Architecture;
}

export interface Architecture {
  status: string;
  approved_on: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
