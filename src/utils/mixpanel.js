import mixpanel from 'mixpanel-browser';

mixpanel.init('038c643e7009aace18bcdb566e94d377');

const env_check = process.env.NODE_ENV === 'production';

// Mixpanel Action Types
const LOADED_HOME_PAGE = 'LOADED_HOME_PAGE';
const LOADED_TAG_PAGE = 'LOADED_TAG_PAGE';

const CLICKED_TAG = 'CLICKED_TAG';
const CLICKED_THREAD = 'CLICKED_THREAD';


const Mixpanel = {
    identify: id => {
        if (env_check) mixpanel.identify(id);
    },
    alias: id => {
        if (env_check) mixpanel.alias(id);
    },
    track: (name, props) => {
        if (env_check) mixpanel.track(name, props);
    },
    people: {
        set: props => {
            if (env_check) mixpanel.people.set(props);
        },
    },
};

export const clickedTag = (tagName = null) => {
    Mixpanel.track(CLICKED_TAG, { tagName })
}

export const clickedThread = ({
    Author,
    Title,
    URL,
    id
}) => {
    Mixpanel.track(CLICKED_THREAD, {
        Author,
        Title,
        URL,
        id
    })
}

export const loadedHomePage = () => {
    Mixpanel.track(LOADED_HOME_PAGE)
}

export const loadedTagPage = (tagName = null) => {
    Mixpanel.track(LOADED_TAG_PAGE, { tagName })
}