using System;

namespace DocsGenerator.ExampleNamespace
{
    /// <summary>
    /// Provides a logging interface for errors
    /// </summary>
    public interface ISampleClass
    {
        /// <summary>
        /// Log an error out
        /// </summary>
        /// <param name="errorOnUtc">The <see cref="DateTime"/> on which the error <paramref name="ex"/> occured</param>
        /// <param name="ex">The error which occured</param>
        void LogError(DateTime errorOnUtc, Exception ex);
    }
}