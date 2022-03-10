n=int(input())
st=input()
x=['a','e','i','o','u','A','E','I','O','U']
sum1=0
l=list(st.split(" "))
for i in l:
    if i not in x:
        sum1+=1
print(sum1)
        
