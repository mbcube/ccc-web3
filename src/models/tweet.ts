export interface TweetResponse {
    data: Tweet[]
    meta: Meta
}

export interface Tweet {
    id: string
    edit_history_tweet_ids: string[]
    text: string
}

export interface Meta {
    oldest_id: string
    newest_id: string
    result_count: number
    next_token: string
}
