# data structure and algorithm implementation
import random

class DbHandler:
    def __init__(self):
        self.users = []
        self.votes = []
        self.careers = [
            'Developer','Programmer','Musician','Dancer','Painter','Enterprenuer',
            'Officer','Politician','Scientist','Comedian','Teacher'
        ]
        self.scoreBoard = [
            [5, 3, 0, 0, 1, 1, 0, 0, 1, 0, 2, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [3, 5, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [0, 1, 5, 1, 2, 3, 4, 0, 2, 0, 0, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [0, 0, 1, 5, 0, 4, 3, 2, 0, 1, 0, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [1, 1, 2, 0, 5, 1, 3, 0, 4, 0, 2, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [1, 1, 3, 4, 1, 5, 0, 2, 0, 4, 3, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [0, 0, 4, 3, 3, 0, 5, 2, 1, 3, 1, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 2, 2, 5, 0, 2, 3, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [1, 1, 2, 0, 4, 0, 1, 0, 5, 0, 2, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 4, 3, 2, 0, 5, 1, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 2, 3, 1, 3, 2, 1, 5, 1, 3, 4, 3, 0, 0, 0, 0, 0]
        ]

    def addUser(self, name, image, email, career):
        self.users.append(
            {
                'name': name,
                'image':image,
                'email':email,
                'career': career,
                'score':0,
                'votedBy':0
            }
        )

    def addVote(self,whome,what):
        self.votes.append(
            (whome,what)
        )
        for user in self.users:
            if user['email'] == whome:
                user['votedBy'] += 1
        self.giveScore(whome,what)
        
    def getScore(self,career1,career2):
        x = self.careers.index(career1)
        y = self.careers.index(career2)
        return self.scoreBoard[x][y]

    def giveScore(self,userEmail,votedCareer):
        for user in self.users:
            if user['email'] == userEmail:
                user['score'] += self.getScore(user['career'],votedCareer)
            
    def getTopUser(self, n):
        results = []
        for i in range(n):
            maxScore = 0
            topUser = {}
            for user in self.users:
                if user['score'] >= maxScore and user not in results:
                    maxScore = user['score']
                    topUser = user
            results.append(topUser)
        return results
    
    def getRandomUsers(self, n):
        if len(self.users) >= n:
            result = []
            while True:
                user = random.choice(self.users)
                if user not in result:
                    result.append(user)
                if len(result) == n:
                    break
            return result
        return random.choices(self.users, k = n)

    def getTotalUsers(self):
        return  len(self.users)

    def getTotalVotes(self):
        return len(self.votes)

    def getMaxScore(self):
        return self.getTopUser(1)[0]['score']

    def getTopUserName(self):
        return self.getTopUser(1)[0]['name']

    def getUser(self,query):
        result = {}
        for user in self.users:
            if user['name'] == query:
                result = user
        return result