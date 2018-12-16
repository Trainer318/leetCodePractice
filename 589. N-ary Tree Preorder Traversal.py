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
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        
        if root is None:
            return []
        
        stack, output = [],[]
        stack.append(root)
        while stack:
            root = stack.pop()
            output.append(root.val)
            stack.extend(root.children[::-1])
        
        return output
        
    