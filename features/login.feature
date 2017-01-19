Feature: Logging in into My Awesome App
	As an awesome human being 
	In order to use My Awesome App
	I want to Log in 



	Scenario: Logging in into My Awesome App with Valid Credentials
		When I type system into user name
		And I type manager into password
		And I click Login button 
		Then I should see a message Login Successful

