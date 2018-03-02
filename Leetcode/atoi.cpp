class Solution
{
  public:
    int myAtoi(string str)
    {
        long long a = 0;
        bool flag = false;
        int s = 0;
        //范围
        const int maxint = 0x7fffffff;
        const int minint = 0x80000000;
        //maxint+1
        const long maxintPlus1 = 0x100000000;

        while (s < str.length() && str[s] == ' ')
        {
            s++;
        }
        if (s < str.length() && str[s] == '+')
        {
            s++;
        }
        else
        {
            if (s < str.length() && str[s] == '-')
            {
                flag = true;
                s++;
            }
        }
        for (int i = s; i < str.length(); i++)
        {
            if (str[i] <= '9' && str[i] >= '0')
            {
                a = a * 10 + str[i] - '0';
                if (a > maxintPlus1)
                    a = maxintPlus1;
            }
            else
            {
                break;
            }
        }
        if (flag)
            a = -a;

        if (a > maxint)
            a = maxint;
        if (a < minint)
            a = minint;
        return a;
    }
};