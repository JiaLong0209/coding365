#ifndef MATHVECTOR
#define MATHVECTOR
#include <cmath>
#include <vector>
class MathVector
{
    private:
        /* This does not work. */
        // double x, y, z;
        // double _vec[3];-> double _vec[_dim];
        int _dim;
        // double *_vec; // pointer (change to vector<>)
        std::vector<double> _vec;

    public:
        // Constructor
        MathVector() // Default constructor
        {
            _dim = 0;
            // std::cout << "MathVector default constructor \n";
            // _vec = NULL;
        }

        void init(MathVector const &input){
            
            _dim = input._dim;
            _vec.clear();
            for(int i = 0; i < _dim; i++){
                _vec.push_back(input._vec.at(i));
            }
        }


        void init(int dim, double *ptr)
        // void init(int dim, std::vector<double> _ptr)
        {
            _dim = dim;

            for(int i =0; i < _dim; i++){
                _vec.push_back(ptr[i]);
            }



            // if (_vec != NULL)
            // {
            //     delete [] _vec;
            // }
            // _vec = new double[_dim]; // allocate memory according to _dim
            // // _vec = ptr;->This is wrong!
            // for (int i = 0; i < _dim; i++)
            // {
            //     _vec[i] = ptr[i]; // Data copy for array
            // }
        }
        MathVector(int dim, double *ptr) // Self-defined constructor
        {
            _dim = 0;
            // _vec = NULL;
            // convert double point to vector
            init(dim, ptr);
        }
        // Copy constructor(If data contain pointer,we should have copy constructor and copy assignment.)
        MathVector(MathVector const &input)
        {
            // std::cout << "Copy constructor\n";

            // _dim = input._dim;
            // _vec.clear();
            // for(int i = 0; i < _dim; i++){
            //     _vec.push_back(input._vec.at(i));
            // }
            
            init(input);
            
            // _vec = NULL;
            // init(input._dim, input._vec);

        }
        // Destructor
        ~MathVector()
        {

            // if (_vec != NULL)
            // {
            //     delete [] _vec;
            // }
        }
        // Copy assignment
        MathVector &operator=(MathVector const &input)
        {
            // std::cout << "Copy assignment\n";
            // init(input._dim, input._vec);

            // _dim = input._dim;
            // _vec.clear();
            // for(int i = 0; i < _dim; i++){
            //     _vec.push_back(input._vec.at(i));
            // }]


            init(input);

            return *this;
        }
        MathVector &operator=(double const &input)
        {
            this->_dim = input;
            return *this;
        }
        MathVector operator+(MathVector const &input)
        {
            MathVector result = *this;
            for (int i = 0; i <(*this)._dim; i++)
            {
                result._vec[i] += input._vec[i];
            }

            return result;
        }
        MathVector operator-(MathVector const &input)
        {
            MathVector result = *this;
            for (int i = 0; i < _dim; i++)
            {
                result._vec[i] -= input._vec[i];
            }

            return result;
        }
        // Getter
        int getDim()
        {
            return _dim;
        }
        double getAt(int index)
        {
            return _vec[index];
        }
        // Setter
        void setDim(int dim) // passed by value
        {
            _dim = dim;
        }
        double length()
        {
            // a^2 + b^2 = c^2
            // a^2 + b^2 + c^2 = d^2
            double sum = 0;
            for (int i = 0; i < _dim; i++)
            {
                sum += _vec[i] * _vec[i];
            }
            return sqrt(sum);
        }
        void add(MathVector const &input) // &->passed by reference, only change the name, can't copy
        {
            if (input._dim == _dim)
            {
                for (int i = 0; i < _dim; i++)
                {
                    _vec[i] += input._vec[i];
                }
            }
        }
        void add(MathVector *input) // passed by pointer
        {
            if (input->_dim == _dim)
            {
                for (int i = 0; i < _dim; i++)
                {
                    _vec[i] += input->_vec[i];
                }
            }
        }
        void expand(double input){
            _dim += 1;
            _vec.push_back(input);





            // double *tmp = new double[_dim];
            // for (int i = 0; i < _dim - 1; i++){
            //     tmp[i] = _vec[i];
            // }
            // tmp[_dim - 1] = input;
            // delete[] _vec;
            // _vec = tmp;
        }
        
};
#endif
