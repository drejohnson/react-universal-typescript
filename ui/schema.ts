//  This file was automatically generated and should not be edited.
/* tslint:disable */

export interface AllEpisodesQuery {
  allEpisodes: Array< EpisodeInfoFragment & TopicsFragment & {
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
  Episode: EpisodeInfoFragment & TopicsFragment & {
    show: ShowInfoFragment,
  } | null;
}

export interface ShowQueryVariables {
  id: string | null;
}

export interface ShowQuery {
  Show: ShowInfoFragment & {
    episodes: Array<EpisodeInfoFragment>,
  } | null;
}

export interface EpisodeInfoFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  imageThumbUrl: string;
  createdAt: String | null;
  videoUrl: string;
}

export interface TopicsFragment {
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
}
/* tslint:enable */
