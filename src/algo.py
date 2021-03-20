# data structure and algorithm implementation
import random

class DataStructure:
    def __init__(self):
        self.users = []
        self.votes = [] 

    def add(self, name, imgPath, email, career):
        self.users.append(
            {
                'name': name,
                'imgPath':imgPath,
                'email':email,
                'career': career,
                'isVoted':False,
                'score':0,
                'votedBy':0,
                'votedTo':0
            }
        )

    def vote(self,who,whome,result):
        self.votes.append(
            (who,whome,result)
        )
        for user in self.users:
            if user['email'] == who:
                user['votedTo'] += 1
            elif user['email'] == whome:
                user['votedBy'] += 1
        
    def score(self,user):
        for vote in self.votes:
            if vote[1] == user['email']:
                user['score'] += 1
            
    def result(self,n = 10):
        results = []
        for i in range(n):
            maxScore = 0
            topUser = {}
            for user in self.users:
                if user['score'] >= maxScore and user not in results:
                    topUser = user
            results.append(topUser)
        return results
    
    def getRandomUsers(self,n = 6):
        return random.choices(self.users, k = n)
