//  This file was automatically generated and should not be edited.
/* tslint:disable */

export interface EpisodeQueryVariables {
  id: string | null;
}

export interface EpisodeQuery {
  Episode: EpisodeEntryFragment & TopicsFragment & {
    show: ShowEntryFragment,
  } | null;
}

export interface ShowQueryVariables {
  id: string | null;
}

export interface ShowQuery {
  Show: ShowEntryFragment & {
    episodes: Array<EpisodeEntryFragment & TopicsFragment>,
  } | null;
}

export interface EpisodeEntryFragment extends TopicsFragment {
  id: string;
  title: string;
  description: string;
  imageThumbUrl: string;
  posterUrl: string | null;
  createdAt: String | null;
  videoUrl: string;
}

export interface TopicsFragment {
  topics: Array< {
    id: string,
    name: string,
  } > | null;
}

export interface ShowEntryFragment {
  id: string;
  title: string;
  description: string;
}
/* tslint:enable */
