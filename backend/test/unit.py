import unittest
from backend.recommender import get_recommendation


class TestRecommender(unittest.TestCase):

    def test_get_recommendation(self):
        hunger_level = 5
        food_type = "和食"
        result = get_recommendation(hunger_level, food_type)
        self.assertIsInstance(result, dict)
if __name__ == "__main__":
    unittest.main()
