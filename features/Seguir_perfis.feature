Feature: Follow profiles
As a user registered on the system, I would like to be able to follow profiles of critics, museums, galleries and artists

Scenario: Page containing recommendations of profiles of artists, museums, galleries and critics to a user
Given I am logged in
When I click on the Recommendations page
Then I am taken to a page with summed up profiles of artists, galleries, museums and critics the system thinks I may enjoy

Scenario: Look at a museum's profile Page
Given I am seeing the summed up profile of a museum
When I click on it
Then I am taken to the full page of the museum’s profile
And i can see all the information provided by the museum

Scenario: Follow a museum's profile
Given I am on someone’s profile
And I can see the follow button
When I click on the follow button
Then I can see an alert that informs me I’m following this profile 
And I can receive information published by the profile on my Updates Feed

Scenario: Look at Updates Feed
Given I am logged in
When I click on the Updates Feed
Then I go to the Updated Feed
And I can see the information published by the profiles I follow in a certain order in summed up cards
And I can click on the cards to see the full publication

Scenario: Fail to look at Updates Feed
Given I am logged in
When I click on the Updates Feed
Then I go to the Updates Feed
And I cannot see any information published

Scenario: Fail to look at a museum's profile Page
Given I am seeing the summed up profile of a museum
When I click on it
Then I am taken to a page that exhibits an error message
And I can see no information about the museum
Then blablabla

Scenario: Fail to look at a museum's profile Page
Given I am seeing the summed up profile of a museum
When I click on it
Then I am taken to a page that exhibits an error message
And I can see no information about the museum
