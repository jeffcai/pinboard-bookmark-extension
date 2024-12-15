document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bookmarkButton').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            const url = currentTab.url;
            const title = currentTab.title;

            // Construct the Pinboard API URL for adding a bookmark
            const pinboardUrl = `https://pinboard.in/add?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

            // Open the Pinboard URL in a new tab
            chrome.tabs.create({ url: pinboardUrl });
        });
    });
});
