//  This file was automatically generated and should not be edited.
/* tslint:disable */

export interface AllEpisodesQuery {
  allEpisodes: Array< EpisodeInfoFragment & {
    show: ShowInfoFragment,
  } >;
}

export interface AllShowsQuery {
  allShows: Array<ShowInfoFragment>;
}

export interface EpisodeQueryVariables {
  id: string | null;
}

export interface EpisodeQuery {
  Episode: EpisodeInfoFragment & {
    show: ShowInfoFragment,
  } | null;
}

export interface ShowQueryVariables {
  id: string | null;
}

export interface ShowQuery {
  Show: ShowInfoFragment;
}

export interface EpisodeInfoFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  thumbImageUrl: string;
  featureImageUrl: string | null;
  videoUrl: string;
  createdAt: String | null;
  topics: Array< {
    id: string,
    name: string,
  } > | null;
}

export interface ShowInfoFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  posterImageUrl: string | null;
  featureImageUrl: string | null;
}
/* tslint:enable */
