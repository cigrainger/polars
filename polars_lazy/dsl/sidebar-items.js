initSidebarItems({"enum":[["AggExpr",""],["Excluded",""],["Expr","Queries consists of multiple expressions."],["Operator",""]],"fn":[["all","Selects all columns"],["all_exprs","Evaluate all the expressions with a bitwise and"],["any_exprs","Evaluate all the expressions with a bitwise or"],["apply_binary",""],["apply_multiple","Apply a function/closure over the groups of multiple columns. This should only be used in a groupby aggregation."],["arange","Create list entries that are range arrays"],["argsort_by","Find the indexes that would sort these series in order of appearance. That means that the first `Series` will be used to determine the ordering until duplicates are found. Once duplicates are found, the next `Series` will be used and so on."],["as_struct","Take several expressions and collect them into a [`StructChunked`]."],["avg","Find the mean of all the values in this Expression."],["binary_expr",""],["cast","Cast expression."],["col","Create a Column Expression based on a column name."],["collect_all","Collect all `LazyFrame` computations."],["cols","Select multiple columns by name"],["concat","Concat multiple"],["concat_lst","Concat lists entries."],["concat_str","Horizontally concat string columns in linear time"],["count","Count expression"],["cov","Compute the covariance between two columns."],["datetime",""],["dtype_col","Select multiple columns by dtype."],["dtype_cols","Select multiple columns by dtype."],["first","First column in DataFrame"],["fold_exprs","Accumulate over multiple columns horizontally / row wise."],["is_not_null","IsNotNull expression."],["is_null","IsNull expression"],["last","Last column in DataFrame"],["lit","Create a Literal Expression from `L`"],["map_binary","Apply a closure on the two columns that are evaluated from `Expr` a and `Expr` b."],["map_list_multiple","Apply a function/closure over multiple columns once the logical plan get executed."],["map_multiple","Apply a function/closure over multiple columns once the logical plan get executed."],["max","Find the maximum of all the values in this Expression."],["max_exprs","Get the the maximum value per row"],["mean","Find the mean of all the values in this Expression."],["median","Find the median of all the values in this Expression."],["min","Find the minimum of all the values in this Expression."],["min_exprs","Get the the minimum value per row"],["not","Not expression."],["pearson_corr","Compute the pearson correlation between two columns."],["quantile","Find a specific quantile of all the values in this Expression."],["range","Create a range literal."],["spearman_rank_corr","Compute the spearman rank correlation between two columns."],["sum","Sum all the values in this Expression."],["sum_exprs","Get the the sum of the values per row"],["ternary_expr",""],["when","Start a when-then-otherwise expression"]],"mod":[["cat",""],["string",""]],"struct":[["NoEq","Wrapper type that indicates that the inner type is not equal to anything"],["StrpTimeOptions",""],["When","Intermediate state of `when(..).then(..).otherwise(..)` expr."],["WhenThen","Intermediate state of `when(..).then(..).otherwise(..)` expr."],["WhenThenThen","Intermediate state of chain when then exprs."]],"trait":[["BinaryUdfOutputField",""],["FunctionOutputField",""],["Range",""],["RenameAliasFn",""],["SeriesBinaryUdf","A wrapper trait for any binary closure `Fn(Series, Series) -> Result<Series>`"],["SeriesUdf","A wrapper trait for any closure `Fn(Vec<Series>) -> Result<Series>`"]],"type":[["GetOutput",""]]});