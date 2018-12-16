/*
TestCase:
{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}
*/

"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """
        stack = []
        dep = 0
        if root is None:
            return 0
        else:
            stack.append((1,root))
        while stack != []:
            depNow, root = stack.pop()
            if root is not None:
                dep = max(dep, depNow)
                for c in root.children:
                    stack.append((depNow + 1, c))
        
        return dep
    