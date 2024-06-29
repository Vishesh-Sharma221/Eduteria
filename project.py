from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

# Set up the WebDriver using ChromeDriverManager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Define the URL for YouTube search results
url = "https://www.youtube.com/results?search_query=machine+learning+course"

# Open the YouTube search results page
driver.get(url)

# Wait for the page to load
time.sleep(5)

# Get the page source after JavaScript execution
page_source = driver.page_source

# Close the WebDriver
driver.quit()

# Parse the page source with BeautifulSoup
soup = BeautifulSoup(page_source, "html.parser")

# Find all video elements on the page
video_divs = soup.find_all('ytd-video-renderer', class_='style-scope ytd-item-section-renderer')

# Iterate over each video element and extract the channel name if the title contains "Machine Learning"
for video in video_divs:
    title_element = video.find('a', {'id': 'video-title'})
    if title_element and "Machine Learning" in title_element.text:
        channel_element = video.find('a', {'class': 'yt-simple-endpoint style-scope yt-formatted-string'})
        if channel_element:
            channel_name = channel_element.text.strip()
            print(f"Channel: {channel_name}")
